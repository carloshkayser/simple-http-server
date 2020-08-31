### Deploying into Kubernetes

#### Create the Namespace
```sh
$ kubectl create -f namespace-k8s.yaml
```

#### Create the Service
```sh
$ kubectl create -f service-k8s.yaml
```

#### Create the Deployment
```sh
$ kubectl create -f deployment-k8s.yaml
```

Another way:
```sh
$ kubectl create deployment simple-apps --image=docker.io/carloshkayser/simple-http-server:latest
```

---
#### Viewing the deployment
```sh
$ kubectl get deployment simple-http-server -n simple-http-server
```

#### Listing the running Pods
```sh
$ kubectl get pods
```

#### To view the current image version of the app, run a describe command against the Pods:
```sh
$ kubectl describe pods
```

#### Update container version
```sh
$ kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
```

#### Access the server (PORT)
```sh
$ kubectl get svc -n simple-http-server
```

---
#### Delete the Namespace, Service and Deployment
```sh
$ kubectl delete -f deployment-k8s.yaml
$ kubectl delete -f service-k8s.yaml
$ kubectl delete -f namespace-k8s.yaml
```

https://www.linode.com/docs/kubernetes/deploy-container-image-to-kubernetes/#configure-your-kubernetes-cluster