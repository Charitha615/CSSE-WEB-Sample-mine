package com.example.BusTracking.service;

import com.example.BusTracking.model.BusTracking;
import com.example.BusTracking.repository.BusTrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusTrackingServiceImp implements BusTrackingService{

    @Autowired
    private BusTrackingRepository busTrackingRepository;

    @Override
    public BusTracking saveStudent(BusTracking busTracking) {
        return busTrackingRepository.save(busTracking);
    }

    @Override
    public List<BusTracking> getAllBusTracking() {
        return busTrackingRepository.findAll();
    }

}
