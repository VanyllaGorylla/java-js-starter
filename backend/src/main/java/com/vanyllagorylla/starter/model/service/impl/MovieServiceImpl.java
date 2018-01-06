package com.vanyllagorylla.starter.model.service.impl;

import com.vanyllagorylla.starter.model.dao.MovieDao;
import com.vanyllagorylla.starter.model.domain.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vanyllagorylla.starter.model.service.MovieService;

@Service("movieService")
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieDao movieDao;

    public Iterable<Movie> findAll() {
        return movieDao.findAll();
    }
}
