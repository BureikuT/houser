let initialState = {
  propertyName: "",
  address: "",
  city: "",
  state: "",
  zipcode: ""
};

const UPDATE_WIZARD_ONE = "UPDATE_WIZARD_ONE";
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WIZARD_ONE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function updateWizardOne(propertyName, address, city, state, zipcode) {
  return {
    type: UPDATE_WIZARD_ONE,
    payload: {propertyName, address, city, state, zipcode }
  };
}
