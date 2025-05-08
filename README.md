# Nginx Load Balancer with SSL using Docker

This project sets up **Nginx** as a load balancer with **HTTPS support** for multiple backend services using **Docker**.

## 🧱 Architecture

- **Nginx**: Acts as a reverse proxy and load balancer.
- **Certbot**: For obtaining and renewing Let's Encrypt SSL certificates.
- **Node.js** (or any app): Backend services behind the proxy.

                        +-------------+
                        |   Client    |
                        +------+------+  
                               |
                         HTTPS (443)
                               |
                       +-------v-------+
                       |    Nginx      |
                       |  (SSL + LB)   |
                       +---+-------+---++-----------+  +-----------+ 
                           |       |                                |
               +-----------+       +-----------+                     +-----------+ 
               |                               |                                  |
        +------v-----+                 +-------v-----+                 +-----------+ 
        | Backend 1  |                 | Backend 2   |                |Backend 3     |
        +------------+                 +-------------+                 +-----------+ 
