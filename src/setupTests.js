import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });
