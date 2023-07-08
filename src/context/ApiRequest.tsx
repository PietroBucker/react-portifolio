import { ResponseApiType } from './ProjectContext.tsx';

class ApiRequest {
  static async ApiFetch() {
    const responseApi = await fetch('https://api.github.com/users/PietroBucker/repos');
    const data = await responseApi.json() as ResponseApiType[];
    const formatData = data.map((project) => ({
      id: project.id,
      name: project.name,
      html_url: project.html_url,
      image: `https://raw.githubusercontent.com/PietroBucker/${project.name}/main/foto.jpg`,
    }));
    return formatData;
  }
}

export default ApiRequest;
