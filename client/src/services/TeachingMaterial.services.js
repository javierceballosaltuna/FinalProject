import axios from 'axios'

class TeachingMaterialsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllTeachingMaterials = () => this.app.get('/admin/teaching-materials')
    getOneTeachingMaterial = () => this.app.get('/resources/:material_id')
    

}

export default TeachingMaterialsService