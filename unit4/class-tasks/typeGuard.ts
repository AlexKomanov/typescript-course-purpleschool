interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailedInretface {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function getResponse(res: IResponseSuccess | IResponseFailedInretface): res is IResponseSuccess {
    return res.status == PaymentStatus.Success ? true : false;
}

function responseCheck(res: IResponseSuccess | IResponseFailedInretface): number {
    return getResponse(res) ? res.data.databaseId : res.data.errorCode;
}