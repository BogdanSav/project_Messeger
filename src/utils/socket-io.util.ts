import io from 'socket.io-client';

const PATH: string = 'http://localhost:4000';
const socket = io(PATH);
export default socket;