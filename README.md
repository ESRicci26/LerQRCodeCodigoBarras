Código JavaScript/HTML/CSS para ler um QR Code de um arquivo de imagem local e exibir o conteúdo em um campo TEXTAREA, bem como para gerar um QR Code a 
partir do texto e salvar a imagem localmente na pasta Download e também um leitor de código de barras.

LEITOR E GERADOR DE QR CODE
---------------------------

Funcionamento:
--------------
Ler QR Code:
------------
Ao selecionar uma imagem e clicar no botão "Ler QR Code", o script tenta detectar e ler o QR Code da imagem e exibir o texto correspondente 
no campo TEXTAREA.

Gerar QR Code:
--------------
Ao inserir texto no TEXTAREA e clicar no botão "Gerar QR Code", o script gera um QR Code a partir do texto e o exibe como uma imagem abaixo do campo.
O QR Code também é salvo como um arquivo de imagem (qr-code.png) automaticamente na pasta Download.

Esse código utiliza as bibliotecas jsQR.js para leitura de QR Codes e QRCode.js para geração de QR Codes.
Certifique-se de estar conectado à internet para carregar essas bibliotecas externamente, ou baixe e inclua-as localmente no seu projeto.

https://github.com/cozmo/jsQR
https://github.com/soldair/node-qrcode

<script src="https://unpkg.com/jsqr/dist/jsQR.js"></script>
<script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>


LEITOR DE CÓDIGO DE BARRAS
--------------------------
Utilizei a biblioteca Zxing para leitura de código de barras:

Capturar e Ler o Código de Barras:
----------------------------------
O usuário seleciona uma imagem de código de barras usando o input de tipo file.
A imagem é carregada no navegador e exibida em um elemento img para visualização.
A função decodeFromImageElement do ZXing.BrowserBarcodeReader() é chamada para ler e decodificar o código de barras da imagem.
Se o código de barras for detectado, ele é exibido na TEXTAREA.

Tratamento de Erros:
--------------------
Se nenhum código de barras for detectado, ou se ocorrer algum erro, mensagens apropriadas são exibidas ao usuário.

Considerações Finais:
---------------------
Formatos de Código de Barras:
-----------------------------
O Zxing suporta uma ampla gama de formatos de código de barras, incluindo EAN, UPC, QR Code, Code 128, entre outros.
Ele deve ser capaz de lidar com a maioria dos códigos de barras comuns.

Compatibilidade:
----------------
Essa solução deve funcionar na maioria dos navegadores modernos sem problemas significativos.
Com esta abordagem utilizando Zxing, você deverá ser capaz de ler códigos de barras de arquivos de imagem de forma mais confiável.

Para maior veracidade do meu código testei inúmeros boletos meus com código de barras e segue arquivo CodBarras-Luz.JPG para
certificarem que a biblioteca Zxing é a melhor, pois testei uma meia dúzia de bibliotecas e os navegadores não reconhecem e dá erros.
