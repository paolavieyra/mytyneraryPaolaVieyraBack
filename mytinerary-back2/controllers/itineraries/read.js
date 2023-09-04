import { query } from "express";
import Itinerary from "../../models/Itenerary";

export default async (req,res,next) => {
    try {
        console.log(req.query) //es un objeto con todas las consultas/igualdades a buscar en la base de datos

        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.Itinerary){
            objetoDeBusqueda.Itinerary = new RegExp (req.query.Itinerary,'i') 
            //new RegExp(req.query.title, 'i')
        }
        if (req.query.sort)
            objetoDeOrdenamiento.Itinerary = req.query.sort
        //agrego la propiedad por la cual quiero ordenar
        //si es 1 ordena ascendentemente
        //si es -1 ordena descendentemente
        let allItineraries = await Itinerary.find(objetoDeBusqueda, 'country Itinerary photo admin_id ').populate('admin_id', 'photo name mail -_id').sort(objetoDeOrdenamiento)
        if (allItineraries.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Itineraries found',
                response: allItineraries
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }

    } catch (error) {
        next(error)
     
    }
}