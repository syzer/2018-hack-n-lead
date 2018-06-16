# proof of concept

To validate that we can put references of data into a store (e.g. ethereum blockchain), we use [IPFS](https://ipfs.io) that creates hashes which uniquely identifies media, to simplify retrieval of said data or metadata about it later.

## preconditions

1. have `ipfs` installed, if not install it here: https://github.com/ipfs/go-ipfs#install
1. make sure the ipfs daemon is running. Run it like this in a terminal: `ipfs daemon` and keep it running in the background

## steps to reproduce the unique hash of our data

> IPFS hash: `QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L`
> Picture: [example.jpeg](./example.jpeg)

How to create the hash for our original content "example.jpeg":

`ipfs add example.jpeg`

example how it should look like in terminal:
```
$ ipfs add database/example.jpeg
added QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L example.jpeg
```

this should now be accessible on IPFS or any ipfs-proxy, e.g. https://ipfs.io/ipfs/QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L

> Note: there is another way to create the content hash from a file, but is out of scope of this exersize, see IPFS whitepaper about Merkle DAG and content addresses (TODO: find reference and source that does it)

