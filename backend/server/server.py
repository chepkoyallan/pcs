import asyncio
import uvloop
import grpc
import grpc.aio

asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())


async def main(host_machine: str, server_port: int):
    grpc.aio.init_grpc_aio()
    server = grpc.aio.server()
    server.add_insecure_port(f"{host_machine}:{server_port}")
    await server.start()
    await server.wait_for_termination()


if __name__ == '__main__':
    host = "0.0.0.0"
    port = 50051
    print(f"Server running on port {port}")
    asyncio.run(main(host_machine=host, server_port=port))
