import Doctor from "../interfaces/doctor.model";
import {AvailbilityDateItem} from "../interfaces/doctor.model";
import {providersByNameCache, providersBySpecialtyCache} from "../db/database";

class ProviderService {

  setup(name: string, appointmentDate: number) {

    //const provider = providers.find(provider => provider.name.toLowerCase() === name.toLowerCase());
    const provider = providersByNameCache[name] ?? null;
    if (!provider) {
      throw Error(`Provider ${name} not found`);
    }

    const isValidDate = provider.availableDates.some(avail =>
      avail.from <= appointmentDate && avail.to >= appointmentDate
    );

    if (!isValidDate) {
      throw Error(`Provider ${name} with date ${appointmentDate} not found`);
    }
  }

  getAppointments(specialty: string, date: number, minScore: string): string[] {

    const providers = providersBySpecialtyCache[specialty.toLowerCase()] ?? null;
    if (!providers) {
      return [];
    }
    const filteredProviders: Doctor[] = providers.filter((provider: Doctor) =>
      provider.availableDates.some(avail => avail.from <= date && avail.to >= date) &&
      provider.score >= parseFloat(minScore)
    );
  
    if (filteredProviders.length === 0) {
      return [];
    }
  
    const sortedProviders: Doctor[] = filteredProviders.sort((a, b) => b.score - a.score);
    const providerNames = sortedProviders.map(provider => provider.name);
    return providerNames;
  }
}

export default new ProviderService();
