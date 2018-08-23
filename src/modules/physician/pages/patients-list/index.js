import { BasePage } from '../../../../utils';
import Container from './patients-list.container';

export { default as PatientListView } from './patients-list.view';
export { default as PatientListContainer } from './patients-list.container';

export default BasePage(Container);
