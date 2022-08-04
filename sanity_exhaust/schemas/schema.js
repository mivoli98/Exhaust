import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import model from './model';
// import model_type from '../../public/model_type';
import model_type from './model_type';



export default createSchema({ 
  name: 'default',
  types: schemaTypes.concat([ product, banner, model, model_type ]),
})
