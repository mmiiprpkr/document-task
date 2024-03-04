export const uploadImageByUrl = (e: any) => {
  let link = new Promise((resolve, reject) => {
      try {
          resolve(e);
      } catch (error) {
          reject(error);
      }
  });

  return link.then(url => {
      return {
          success : 1,
          file : { url }
      }
  })
};