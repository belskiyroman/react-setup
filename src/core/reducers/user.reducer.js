// import {  } from '../types/user.types';

const initialState = {
  profile: {
    id: 241,
    centoportal_id: 'centoportal_id',
    email: 'ph_test@email.com',
    first_name: 'Nettie',
    last_name: 'Thompson',
    institution: 'Royal Free Medical Centre',
    country: 'Falkland Islands (Malvinas)',
    city: 'Lake Lorenberg',
    zip_code: '17162',
    address: '8382 Christoper Parkways',
    phone: '(947) 993-3521 3939',
  },
};

const userReducer = (state = initialState, { action, payload }) => {
  switch (action) {
    default: return state;
  }
};

export default userReducer;
