def build_service_docker(name):
    return docker_build(
        ref=name,
        dockerfile="./Dockerfile",
        context=".",
        build_args={
            "APP_NAME": name,
        }
    )

def build_service_k8s(name):
    return k8s_yaml(
        helm(
            "./ops/helm/api-chart",
            name=name,
            set=[
            "image.repository=" + name,
            "image.tag=latest",
            "ingress.hosts[0].paths[0].path=/" + name + "/(.*)",
            "ingress.hosts[0].paths[0].pathType=ImplementationSpecific",
            ]
        )
    )

build_service_docker("order")
build_service_docker("inventory")
build_service_docker("payment")

build_service_k8s("order")
build_service_k8s("inventory")
build_service_k8s("payment")