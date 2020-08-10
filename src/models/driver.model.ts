export interface DriverModel {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    code: string;
    permanentNumber: string;
}

export interface DriverTableModel {
    Drivers: Array<DriverModel>;
}

export interface DriverResponseModel {
    DriverTable: DriverTableModel;
    total: number;
}