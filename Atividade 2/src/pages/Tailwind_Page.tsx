// React
import { useEffect, useState } from 'react';

// Axios
import axios from 'axios';

function App() {
  const url = "https://api.github.com/users/Kaua-Matheus";

  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(
    {
      perfil: "",
      nome: "",
      bio: "",
      public_repo: "",
      html_url: "",
    }
  );

  interface ApiResponse {
    perfil: string;
    nome: string;
    bio: string;
    public_repo: string;
    html_url: string,
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      const formattedData: ApiResponse = {
        perfil: response.data.avatar_url,
        nome: response.data.name,
        bio: response.data.bio,
        public_repo: response.data.public_repos,
        html_url: response.data.html_url,
      };
      console.log(formattedData)
      setData(formattedData)
      setLoaded(true)
    };
    getData();
  }, []);


  return (

    <div
      className="flex justify-center items-center h-screen"
    >
      {loaded ? 
      <div
      className='flex flex-col items-center text-center bg-[#D9D9D9] pt-10 pb-5 px-14 rounded-lg space-y-6'
    >
      <div>
        <img 
          className="rounded-full h-16 w-16" src={data.perfil} alt="Imagem Exemplo" />
      </div>

      <div
        className="flex flex-col space-y-2"
      >
        <p>{data.nome}</p>
        <hr 
          className="border-black w-full"/>
        <p>{data.bio || "Sem biografia disponível"}</p>
        <hr 
          className="border-black w-full"/>
        <p>Repositórios Públicos: {data.public_repo}</p>
      </div>

      <div>
        <a
          href={data.html_url}
          target='_blank'
          className="bg-green-900 px-2 py-1 rounded text-white"
        >
          Ver Perfil no Github
        </a>
      </div>
    </div>
     : 
    <div>
      Carregando..
    </div>}
    </div>
  )
}

export default App
