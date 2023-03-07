import { useState, useEffect } from 'react';

export function localStorageToObject<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
}