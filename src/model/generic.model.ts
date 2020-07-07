export class GenericModel {
    id?: number;
    dbModel!: string;

    setModel(dbModel: string){
        this.dbModel = dbModel;
    }

    getModel() {
        return this.dbModel;
    }
}