#!/bin/sh
OUTDIR="dist"
mkdir -p $OUTDIR &&\
ln -sr fonts $OUTDIR &&\
ln -sr media $OUTDIR
