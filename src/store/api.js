
import axios from 'axios'

import Api from 'api_axios';
import DataProxy from 'api_axios/src/DataProxy.js'

import * as searchTypes from '../pages/search/api/actions-type.js'
import searchActions from '../pages/search/api/actions.js'


let types = {...searchTypes}

let actions = {...searchActions}

 let _DataProxy = new DataProxy()

 let data = new Proxy({},_DataProxy.handler)

 Api.var('data',data)


export default new Api({
    config:{debug:true},
    axios,
    types,
    actions,
})