import { createStore } from "vuex"
import CoachesModule from "./module/coaches/index.js"

const store = createStore({
    modules: {
        coaches: CoachesModule,
    }
})

export default store;