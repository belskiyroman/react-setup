import { BasePage } from '../../../../hoc/base-page';
import { Header } from '../../components/header/index';
import Container from './patients-list.container';

export { default as PatientListView } from './patients-list.view';
export { default as PatientListContainer } from './patients-list.container';

export default BasePage(Container, Header);
