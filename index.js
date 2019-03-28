import tip from './src/index';
export default {
    install(Vue, opts) {
        let $alert = Vue.extend(tip);
        let instance = new $alert().$mount();
        document.querySelector('body').appendChild(instance.$el);
        Vue.prototype.$toast = (...opts) => {
            let option = { msg: "", cb: null, wait: 1800 },
                argsType = Object.prototype.toString.call(opts),
                _args = opts, _len = opts.length;
            if (_len === 1) {
                if (Array.isArray(opts)) {
                    option.msg = opts.join();
                } else if (argsType === "[object Object]") {
                    option = opts;
                }
            } else if (_len >= 2) {
                option.msg = _args[0];
                option.cb = _args[1];
                if (_len === 3) {
                    option.wait = _args[2];
                }
            }
            instance.showFn(option);
        }
    }
}
