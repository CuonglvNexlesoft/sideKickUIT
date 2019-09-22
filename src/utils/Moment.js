import moment from 'moment';
import Locale from './Locale';
import vi from 'moment/locale/vi';

const currentLocale = Locale.currentLocale().split('-')[0];
moment.locale(currentLocale, (currentLocale == 'vi' ? vi : undefined));

export default moment;