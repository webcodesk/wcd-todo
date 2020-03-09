import localforage from 'localforage';

let storageInstance;

export function initStorage() {
  localforage.config({
    name: 'WCDToDoTutorial'
  });
}

export function getStorageInstance() {
  if (!storageInstance) {
    initStorage();
    storageInstance = localforage.createInstance({
      name: 'WCDToDoTutorialStorage',
    });
  }
  return storageInstance;
}

const TO_DO_NOTES = 'TO_DO_NOTES';

export async function getToDoNotes() {
  return getStorageInstance().getItem(TO_DO_NOTES);
}

export async function saveToDoNotes(todoNotesMap) {
  return getStorageInstance().setItem(TO_DO_NOTES, todoNotesMap);
}
