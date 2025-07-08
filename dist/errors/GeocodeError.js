class GeocodeError extends Error {
    response;
    status;
    constructor(message){
        super(message);
        this.name = 'GeocodeError';
    }
}
export { GeocodeError };

//# sourceMappingURL=GeocodeError.js.map