
from django.http.response import Http404
from .models import Song
from .serializers import  SongSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status
from django.shortcuts import (get_object_or_404,render,HttpResponseRedirect)


 
# Create your views here.

class Songlist(APIView):

    def get(self, request):
        song = Song.objects.all()
        serializer = SongSerializer(song, many=True)
        return Response (serializer.data)
    def post (self,request):
        serializer =SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SongDetail(APIView):
   
    def get_Song(self, pk):
        try:
            return Song.objects.get(pk=pk)
        except Song.DoesNotExist:
            raise Http404
    
    def get(self, request ,pk):
        song = self.get_objects(pk)
        serializer = SongSerializer(song, data=request.data)
        if serializer.is_valid():
           serializer.save()
        return Response (serializer.data)
    
    def put(self,request,pk, format=None):
        song = self.get_objects(pk)
        serializer = SongSerializer(song, data=request.data)
        if serializer.is_valid():
           serializer.save()
        return Response (serializer.data)
    
    def delete(self,request,pk, format=None): 
        song = self.get_objects(pk)
        song.delete()
        return Response(status=status.status.HTTP_204_NO_CONTENT)
        








       
       
       
       
       
      