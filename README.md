***Nao foi possível fazer a entrega com audio dentro de cada botão, porém ele salva na raiz do projeto os mesmos caso queira consulta-los.

Ao baixar o projeto do GIT vão existir duas partes, front-end e back-end.

Back-end:

Abrir o terminal do projeto e rodar os seguintes comando:

yarn
yarn add mysql2
yarn add sequelize
yarn add sequelize-cli -D
yarn add nodemon -D
yarn add express
yarn add ibm-watson
yarn add watson-developer-cloud


Para criação das tabelas no banco MySql basta seguir esses passos:

yarn sequelize init
yarn sequelize migration:create --name=create-comments
yarn sequelize db:migrate


Executar o projeto:

Para executar o projeto basta rodar YARN DEV

OBS: Os dois projetos devem estar abertos e compilando