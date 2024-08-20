//MÉTODO PARA LEITURA E CRIAÇÃO DE QR CODE
document.getElementById('readQrBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, canvas.width, canvas.height);
                
                if (code) {
                    document.getElementById('qrText').value = code.data;
                } else {
                    alert('Nenhum QR Code detectado.');
                }
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione um arquivo de imagem.');
    }
});

document.getElementById('generateQrBtn').addEventListener('click', function () {
    const qrText = document.getElementById('qrText').value;

    if (qrText) {
        const qrCanvas = document.getElementById('qrCanvas');
        QRCode.toCanvas(qrCanvas, qrText, function (error) {
            if (error) {
                alert('Erro ao gerar o QR Code: ' + error);
            } else {
                const qrImage = qrCanvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = qrImage;
                link.download = 'qr-code.png';
                link.click();
                document.getElementById('qrImage').src = qrImage;
            }
        });
    } else {
        alert('Por favor, insira um texto para gerar o QR Code.');
    }
});




//MÉTODO PARA LEITURA DE CÓDIGO DE BARRAS - Usando a biblioteca Zxing
document.getElementById('readBarcodeBtn').addEventListener('click', function () {
    const fileInput1 = document.getElementById('fileInput1');
    const file = fileInput1.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            document.getElementById('previewImg').src = event.target.result;

            img.onload = function () {
                const codeReader = new ZXing.BrowserBarcodeReader();
                codeReader.decodeFromImageElement(img).then(result => {
                    if (result) {
                        document.getElementById('barcodeText').value = result.text;
                    } else {
                        alert('Nenhum código de barras detectado.');
                    }
                }).catch(err => {
                    console.error('Erro ao ler o código de barras:', err);
                    alert('Erro ao ler o código de barras. Tente com outra imagem.');
                });
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione um arquivo de imagem.');
    }
});
