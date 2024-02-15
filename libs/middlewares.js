
/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 14, 2024
*/
import express from 'express';

/**
 * Adds middlewares to the given express application.
 * @param {express.Express} api The express application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
