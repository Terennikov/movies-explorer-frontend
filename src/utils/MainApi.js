import { BASE_URL } from "./constants";

export async function _requestResult(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
    
  }

export async function createUser(name, email, password) {
    const res = await fetch(`${BASE_URL}/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              name,
              email,
              password,
          }),
      });
      return await _requestResult(res);
  }

export async function login(email, password) {
    const res = await fetch(`${BASE_URL}/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      })

      return await _requestResult(res);
  }

export async function getUserInfo() {
    const res = await fetch(`${BASE_URL}/users/me`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await _requestResult(res);
  }

export async function updateUser(name, email) {
    const res = await fetch(`${BASE_URL}/users/me`, {
          method: 'PATCH',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
      });
      return await _requestResult(res);
  }

export async function getSavedMovies() {
    const res = await fetch(`${BASE_URL}/movies`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await _requestResult(res);
  }

export async function addNewMovie(data) {
    const res = await fetch(`${BASE_URL}/movies`, {
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
              movieId: data.movieId,
              nameRU: data.nameRU,
              nameEN: data.nameEN,
          }),
      });
      return await _requestResult(res);
  }

export async function deleteMovie(data) {
    const res = await fetch(`${BASE_URL}/movies/${data}`, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
      });
      return await _requestResult(res);
  }
