interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum Status {
    SUCCESS = 'success' ,
    FAILED = "filed"
}
interface IRequest extends IPayment {

}

interface IPaymentSucceeded extends IPayment {
    databaseId: number;
}

interface IPaymentFailed {
    errorMessage: string;
    errorCode: string;
}

interface IResponseFailed {
    status: Status.FAILED,
    data: IPaymentFailed
}

interface IResponseSucceeded {
    status: Status.SUCCESS,

}

