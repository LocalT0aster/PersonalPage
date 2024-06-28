#!/bin/sh
OUTDIR="dist"
mkdir -p $OUTDIR &&\
ln -sr fonts $OUTDIR &&\
ln -sr media $OUTDIR &&\
ln -sr styles/* $OUTDIR &&\
ln -sr pages/* $OUTDIR
