import { BasePage } from '../../../../hoc/base-page';
import { Header } from '../../components/header/index';
import Container from './patient-profile.container';

export { default as PatientProfileView } from './patient-profile.view';
export { default as PatientProfileContainer } from './patient-profile.container';

export default BasePage(Container, Header);
