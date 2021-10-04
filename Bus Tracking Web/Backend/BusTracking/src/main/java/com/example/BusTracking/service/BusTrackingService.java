package com.example.BusTracking.service;

import com.example.BusTracking.model.BusTracking;

import java.util.List;

public interface BusTrackingService {
    public BusTracking saveStudent(BusTracking busTracking);
    public List<BusTracking> getAllBusTracking();
}
