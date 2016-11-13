/*
 * An AppEventListenerEnhance for React Native app
 * which provides addEventListener functions that are safely cleaned up when the component unmounts
 * https://github.com/react-native-component/react-native-smart-app-event-listener-enhance/
 * Released under the MIT license
 * Copyright (c) 2016 react-native-component <moonsunfall@aliyun.com>
 */

export default AppEventListenerEnhance = (ComposedComponent) => {

    let _key = 'AppEventListenerEnhance_listeners'

    return class extends ComposedComponent {

        componentWillUnmount () {
            super.componentWillUnmount && super.componentWillUnmount()
            let {
                [ _key ]: listeners,
                } = this
            listeners && listeners.forEach((listener) => {
                listener.remove()
            })
            this[ _key ] = null
        }

        addAppEventListener = (...listeners) => {
            let { [ _key ]: listenerList } = this
            if (!listenerList) {
                this[ _key ] = listeners
            } else {
                listenerList.push(...listeners)
            }
            return this
        }

    }
}




