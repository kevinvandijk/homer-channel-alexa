export const PLAY_MEDIA_REQUEST = 'homer/alexa/PLAY_MEDIA_REQUEST';
export const PLAY_TV_SHOW_REQUEST = 'homer/alexa/PLAY_TV_SHOW_REQUEST';
export const PLAY_MOVIE_REQUEST = 'homer/alexa/PLAY_MOVIE_REQUEST';
export const TURN_ON_REQUEST = 'homer/alexa/TURN_ON_REQUEST';
export const TURN_OFF_REQUEST = 'homer/alexa/TURN_OFF_REQUEST';
export const SAY = 'homer/alexa/SAY';

export function playMediaRequest(title) {
  return {
    payload: {
      title,
    },
    type: PLAY_MEDIA_REQUEST,
  };
}
