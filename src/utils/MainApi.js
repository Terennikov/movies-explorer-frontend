import { BASE_URL } from './constants.js';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  async _requestResult(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
  }

  async createUser(name, email, password) {
    const res = await fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              name,
              email,
              password,
          }),
      });
      return await this._requestResult(res);
  }

  async login(email, password) {
    const res = await fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });
      return await this._requestResult(res);
  }

  async getUserInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await this._requestResult(res);
  }

  async updateUser(name, email) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
      });
      return await this._requestResult(res);
  }

  async getSavedMovies() {
    const res = await fetch(`${this._baseUrl}/movies`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await this._requestResult(res);
  }

  async addNewMovie(data) {
    const res = await fetch(`${this._baseUrl}/movies`, {
          method: 'POST',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              country: data.country,
              director: data.director,
              duration: data.duration,
              year: data.year,
              description: data.description,
              image: data.image,
              trailer: data.trailerLink,
              thumbnail: data.thumbnail,
              movieId: data.id,
              nameRU: data.nameRU,
              nameEN: data.nameEN,
          }),
      });
      return await this._requestResult(res);
  }

  async deleteMovie(data) {
    const res = await fetch(`${this._baseUrl}/movies/${data}`, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await this._requestResult(res);
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL,
});

export default mainApi;