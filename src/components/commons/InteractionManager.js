import { InteractionManager } from "react-native";
export default {
    ...InteractionManager,
    runAfterInteractions: (f, timeout = 500) => {
        // ensure f get called, timeout at 500ms
        // @gre workaround https://github.com/facebook/react-native/issues/8624
        let called = false;
        const runTimeout = setTimeout(() => { called = true; f() }, timeout);
        InteractionManager.runAfterInteractions(() => {
            if (called) return;
            clearTimeout(runTimeout);
            f();
        });
    }
};