## Tutorial do reprodutor de áudio e vídeo responsivo do React Js

Tutorial de reprodutor de áudio e vídeo js. Os reprodutores de vídeo podem ser vistos facilmente em todos os sites populares, seja no Facebook, Instagram ou Youtube; em geral, esses sites têm seu próprio reprodutor de vídeo. E se você tiver que criar seu próprio reprodutor de vídeo? Se você é novo no desenvolvimento web, pode achar um pouco complicado incorporar um reprodutor de vídeo no React.

Este tutorial ensinará como criar um reprodutor de vídeo responsivo no aplicativo React js usando o pacote Reactjs Media e também como criar um reprodutor de áudio responsivo e reprodutor de áudio do zero.

A biblioteca reactjs-media permite que você crie um reprodutor de vídeo simples e responsivo que funciona melhor em qualquer tamanho de dispositivo.

Por outro lado, você pode criar um componente de reprodutor de áudio, um componente de reprodutor de YouTube e um componente de reprodutor de Facebook no aplicativo react com este pacote. É fácil de configurar, requer apenas a importação da biblioteca ReactVideo e vem com um punhado de propriedades que ajudam a gerenciar rapidamente o reprodutor de vídeo.

## Como criar um reprodutor de vídeo / áudio no React Js

Etapa 1: Criar Projeto React
Etapa 2: instalar o pacote de mídia React Js
Etapa 3: Criar arquivo de componente
Etapa 4: tornar o componente de player de vídeo responsivo
Etapa 5: Criar reprodutor de áudio
Etapa 6: atualizar o arquivo Js do aplicativo
Etapa 7: execute o servidor de desenvolvimento

## Criar, Projeto React

Na primeira etapa, temos que criar o aplicativo react, e você pode baixar a versão mais recente do aplicativo react usando o seguinte comando.

```js
npx create-react-app (nome do seu projeto)
```

## Agora basta abrir, seu projeto

cd (nome do projeto)

## Instale o pacote de mídia React Js

```js
npm install reactjs-media
```

## Criar arquivo de componente

Nesta etapa, você deve abrir o arquivo components / MediaComponent.js e inserir o código fornecido a seguir para criar o reprodutor de vídeo responsivo em reação.

```js
import React, { Component } from "react";
import { ReactVideo } from "reactjs-media";

class MediaComponent extends Component {
  render() {
    return (
      <div>
        <ReactVideo
          src="https://res.cloudinary.com/drimg72d1/video/upload/v1633700905/mar.mp4"
          poster="/poster.png"
          primaryColor="red"
          autoPlay
        />
      </div>
    );
  }
}

export default MediaComponent;
```

## Criar reprodutor de áudio

Você pode importar o módulo ReactAudio do pacote “reactjs-media”, usar a diretiva ReactAudio para passar o arquivo de áudio e o pôster no componente de áudio react.

```js
import React, { Component } from "react";
import { ReactAudio } from "reactjs-media";

class MediaComponent extends Component {
  render() {
    return (
      <div>
        <ReactAudio src="/your_audio_file.mp4" poster="/your_poster_file.png" />
      </div>
    );
  }
}

export default MediaComponent;
```

## Atualizar arquivo Js do aplicativo

Em seguida, nesta etapa, você precisa registrar o componente do reprodutor de mídia no arquivo App.js principal .

```js
import React from "react";
import "./App.css";

import MediaComponent from "./components/MediaComponent";

function App() {
  return (
    <div className="App">
      <MediaComponent />
    </div>
  );
}

export default App;
```

## Execute o servidor de desenvolvimento

Mais uma vez, acesse o prompt de comando, digite o comando fornecido no terminal, pressione Enter e execute o servidor de desenvolvimento.

```js
npm start
ou
yarn start
```

## Conclusão

Neste tutorial, aprendemos como criar um componente de player de vídeo no aplicativo react js e também exploramos como usar o plugin de mídia react js para desenvolver o player de vídeo personalizado.
