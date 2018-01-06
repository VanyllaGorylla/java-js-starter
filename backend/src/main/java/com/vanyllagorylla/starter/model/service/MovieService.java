package com.vanyllagorylla.starter.model.service;

import com.vanyllagorylla.starter.model.domain.Movie;

public interface MovieService {
    Iterable<Movie> findAll();
}
