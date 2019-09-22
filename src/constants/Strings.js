import GlobalKeys from '../constants/GlobalKeys';
import Locale from '../utils/Locale';
import en from '../utils/languages/en.json'; // default language check is EN

let Strings = {};
global[GlobalKeys.KEY_API_STRINGS] = {};
for (let key of Object.keys(en)){
    Object.defineProperty(Strings, key, { get: () => Locale.t(key) });
}
Object.defineProperty(Strings, 'API', { get: () => global[GlobalKeys.KEY_API_STRINGS] });

export default Strings;