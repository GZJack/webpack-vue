
/**
 * mutations.js 
 */
import * as mTypes from '../../allMutations-type.js';

export default {
    // 自增
    [mTypes.HOME_MUTATION_CHANGE_STATE_COUNT](state){
        state.count +=1
    }
}