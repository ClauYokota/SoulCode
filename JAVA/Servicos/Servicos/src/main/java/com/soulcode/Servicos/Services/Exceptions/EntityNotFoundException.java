package com.soulcode.Servicos.Services.Exceptions;

public class EntityNotFoundException extends RuntimeException {
    //criando um construtor
    public EntityNotFoundException (String msg){
        super(msg);
    }
}
