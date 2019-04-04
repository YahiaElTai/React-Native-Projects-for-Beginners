/* eslint-disable import/prefer-default-export */
export const selectLibrary = (libraryId = null) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
