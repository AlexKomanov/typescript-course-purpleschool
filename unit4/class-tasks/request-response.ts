interface IPayment {
    sum: number;
    from: number;
    to: number;
}

type Status = 'success' | "filed";

interface IRequest extends IPayment {

}

interface IPaymentSucceeded {

    databaseId: number;
    sum: number;
    from: number;
    to: number;


}

interface IPaymentFailed {
    errorMessage: string;
    errorCode: string;
}

interface IResponse {
    status: Status;
    data: IPaymentSucceeded | IPaymentFailed;
}

