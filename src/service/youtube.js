import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      params: {
        key,
      },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 40,
        regionCode: 'KR',
      },
    });

    const {
      data: { items },
    } = response;

    return items;
  }

  async searchVideos(word) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 30,
        q: word,
        type: 'video',
      },
    });

    const {
      data: { items },
    } = response;

    // console.log(items);
    return items;
  }
}

export default Youtube;
